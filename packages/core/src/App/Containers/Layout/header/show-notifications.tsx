import React from 'react';
import { observer, useStore } from '@deriv/stores';
import { Localize } from '@deriv/translations';
import { ToggleNotifications } from 'App/Components/Layout/Header';

const ShowNotifications = observer(() => {
    const { notifications: notifications_store } = useStore();
    const { is_notifications_visible, notifications, toggleNotificationsModal } = notifications_store;

    return (
        <div data-testid='dt_traders_hub_show_notifications' className='trading-hub-header__notification'>
            <ToggleNotifications
                count={notifications.length}
                is_visible={is_notifications_visible}
                toggleDialog={toggleNotificationsModal}
                tooltip_message={<Localize i18n_default_text='View notifications' />}
            />
        </div>
    );
});

export default ShowNotifications;
