import React from 'react';
import MT5MigrationModal from '../mt5-migration-modal';
import { render, screen } from '@testing-library/react';
import { StoreProvider, mockStore } from '@deriv/stores';
import { CFDStoreProvider } from 'Stores/Modules/CFD/Helpers/useCfdStores';
import { useMT5SVGEligibleToMigrate } from '@deriv/hooks';
import { MT5MigrationModalContext } from '../mt5-migration-modal-context';
import userEvent from '@testing-library/user-event';

jest.mock('@deriv/hooks', () => ({
    ...jest.requireActual('@deriv/hooks'),
    useMT5SVGEligibleToMigrate: jest.fn(),
}));

jest.mock('../mt5-migration-modal-content', () => {
    const MockMT5Content = () => <div>MT5Content</div>;
    return MockMT5Content;
});

const modal_root_el = document.createElement('div');
modal_root_el.setAttribute('id', 'modal_root');
document.body.appendChild(modal_root_el);

const mock_store = mockStore({
    ui: {
        is_mobile: false,
        is_mt5_migration_modal_open: true,
        setMT5MigrationModalEnabled: jest.fn(),
        toggleMT5MigrationModal: jest.fn(),
    },
});

const mockUseMT5SVGEligibleToMigrate = useMT5SVGEligibleToMigrate as jest.MockedFunction<
    typeof useMT5SVGEligibleToMigrate
>;

describe('MT5MigrationModal', () => {
    let response: Partial<ReturnType<typeof useMT5SVGEligibleToMigrate>>;
    const renderComponent = () => {
        const wrapper = ({ children }: { children: JSX.Element }) => (
            <MT5MigrationModalContext.Provider
                value={{ show_modal_front_side: true, setShowModalFrontSide: () => null }}
            >
                <StoreProvider store={mock_store}>
                    <CFDStoreProvider>{children}</CFDStoreProvider>
                </StoreProvider>
            </MT5MigrationModalContext.Provider>
        );
        // @ts-expect-error response return value is not required to have all object
        mockUseMT5SVGEligibleToMigrate.mockReturnValue(response);
        render(<MT5MigrationModal />, { wrapper });
    };

    beforeEach(() => {
        response = {
            no_of_svg_accounts_to_migrate: 0,
            has_svg_accounts_to_migrate: true,
        };
    });

    it('should render MT5MigrationModal', () => {
        renderComponent();
        expect(screen.getByText(/MT5Content/)).toBeInTheDocument();
        expect(screen.getByText(/Enhancing your trading experience/)).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should render functions when close button is clicked', async () => {
        renderComponent();
        const close_button = screen.getByRole('button');
        userEvent.click(close_button);
        expect(mock_store.ui.setMT5MigrationModalEnabled).toBeCalled();
        expect(mock_store.ui.toggleMT5MigrationModal).toBeCalled();
    });
});