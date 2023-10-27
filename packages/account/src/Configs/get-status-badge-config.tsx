import React from 'react';
import { Link } from 'react-router-dom';
import { Text } from '@deriv/components';
import { MT5AccountStatus } from '@deriv/shared';
import { Localize } from '@deriv/translations';

const getStatusBadgeConfig = (
    account_status: typeof MT5AccountStatus[keyof typeof MT5AccountStatus],
    openFailedVerificationModal?: (selected_account_type: string) => void,
    selected_account_type?: string
) => {
    const BadgeTextComponent = <Text key={0} weight='bold' size='xxxs' color='warning' />;

    switch (account_status) {
        case MT5AccountStatus.PENDING:
            return {
                text: (
                    <Localize
                        i18n_default_text='<0>Pending verification</0>'
                        components={[<Text key={0} weight='bold' size='xxxs' color='var(--status-warning)' />]}
                    />
                ),
                icon: 'IcAlertWarning',
            };
        case MT5AccountStatus.FAILED:
            return {
                text: (
                    <Localize
                        i18n_default_text='<0>Verification failed.</0> <1>Why?</1>'
                        components={[
                            <Text key={0} weight='bold' size='xxxs' color='var(--status-danger)' />,
                            <Text
                                key={1}
                                className='link-verification-failed'
                                onClick={() => {
                                    openFailedVerificationModal?.(selected_account_type ?? '');
                                }}
                            />,
                        ]}
                    />
                ),
                icon: 'IcRedWarning',
            };
        case MT5AccountStatus.NEEDS_VERIFICATION:
            return {
                text: (
                    <Localize
                        i18n_default_text='<0>Need verification.</0><1>Verify now</1>'
                        components={[
                            <Text key={0} weight='bold' size='xxxs' color='var(--status-info)' />,
                            <Link key={1} className='link-need-verification' to='/account/proof-of-identity' />,
                        ]}
                    />
                ),
                icon: 'IcAlertInfo',
            };
        case MT5AccountStatus.MIGRATED_WITH_POSITION:
            return {
                text: <Localize i18n_default_text='<0>No new positions</0>' components={[BadgeTextComponent]} />,
                icon: 'IcAlertWarning',
            };
        case MT5AccountStatus.MIGRATED_WITHOUT_POSITION:
            return {
                text: <Localize i18n_default_text='<0>Account closed</0>' components={[BadgeTextComponent]} />,
                icon: 'IcAlertWarning',
            };
        default:
            return {
                text: '',
                icon: '',
            };
    }
};

export default getStatusBadgeConfig;
