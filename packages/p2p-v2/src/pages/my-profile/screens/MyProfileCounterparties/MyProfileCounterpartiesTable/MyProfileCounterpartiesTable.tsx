import React, { useEffect } from 'react';
import { Table } from '@/components';
import { p2p } from '@deriv/api';
import { Loader, Text } from '@deriv-com/ui';
import { MyProfileCounterpartiesEmpty } from '../MyProfileCounterpartiesEmpty';
import { MyProfileCounterpartiesTableRow } from '../MyProfileCounterpartiesTableRow';
import './MyProfileCounterpartiesTable.scss';

type TMyProfileCounterpartiesTableProps = {
    dropdownValue: string;
    searchValue: string;
    setShowHeader: (show: boolean) => void;
};

type TMyProfileCounterpartiesTableRowRendererProps = {
    id?: string;
    is_blocked: boolean;
    name?: string;
};

const MyProfileCounterpartiesTableRowRenderer = ({
    id,
    is_blocked,
    name,
}: TMyProfileCounterpartiesTableRowRendererProps) => (
    <MyProfileCounterpartiesTableRow id={id!} isBlocked={is_blocked} nickname={name!} />
);

//TODO: rewrite the implementation in accordance with @deriv-com/ui table component
const MyProfileCounterpartiesTable = ({
    dropdownValue,
    searchValue,
    setShowHeader,
}: TMyProfileCounterpartiesTableProps) => {
    const {
        data = [],
        isFetching,
        isLoading,
        loadMoreAdvertisers,
    } = p2p.advertiser.useGetList({
        trade_partners: 1,
        is_blocked: dropdownValue === 'blocked' ? 1 : 0,
        advertiser_name: searchValue,
    });

    useEffect(() => {
        if (data.length > 0) {
            setShowHeader(true);
        }
    }, [data, setShowHeader]);

    if (isLoading) {
        return <Loader className='p2p-v2-my-profile-counterparties-table__loader' isFullScreen={false} />;
    }

    if (!isFetching && data.length === 0) {
        if (searchValue === '') return <MyProfileCounterpartiesEmpty />;
        return <Text weight='bold'>There are no matching name</Text>;
    }

    return (
        <Table
            data={data}
            isFetching={isFetching}
            loadMoreFunction={loadMoreAdvertisers}
            rowRender={(rowData: unknown) => (
                <MyProfileCounterpartiesTableRowRenderer
                    {...(rowData as TMyProfileCounterpartiesTableRowRendererProps)}
                />
            )}
            tableClassname='p2p-v2-my-profile-counterparties-table'
        />
    );
};

export default MyProfileCounterpartiesTable;
