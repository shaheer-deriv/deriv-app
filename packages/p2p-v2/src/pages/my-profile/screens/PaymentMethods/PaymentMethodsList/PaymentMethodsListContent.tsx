import React, { useEffect, useMemo, useState } from 'react';
import { TAdvertiserPaymentMethods, TSelectedPaymentMethod } from 'types';
import { PaymentMethodCard } from '@/components';
import { PaymentMethodModal } from '@/components/Modals';
import { PAYMENT_METHOD_CATEGORIES } from '@/constants';
import { TFormState } from '@/reducers/types';
import { sortPaymentMethods } from '@/utils';
import { p2p } from '@deriv/api';
import { Text } from '@deriv-com/ui';
import AddNewButton from './AddNewButton';

type TPaymentMethodsGroup = Record<
    string,
    {
        paymentMethods: TAdvertiserPaymentMethods;
        title: string;
    }
>;

type TPaymentMethodsListContentProps = {
    formState: TFormState;
    isMobile: boolean;
    onAdd: (selectedPaymentMethod?: TSelectedPaymentMethod) => void;
    onDelete: (selectedPaymentMethod?: TSelectedPaymentMethod) => void;
    onEdit: (selectedPaymentMethod?: TSelectedPaymentMethod) => void;
    onResetFormState: () => void;
    p2pAdvertiserPaymentMethods: TAdvertiserPaymentMethods;
};

/**
 * @component This component is used to display a list of payment methods. It's the content of the PaymentMethodsList component, when the list is not empty
 * @param formState - The current state of the form
 * @param isMobile - Whether the current device is mobile or not
 * @param p2pAdvertiserPaymentMethods - The list of payment methods
 * @returns {JSX.Element}
 * @example <PaymentMethodsListContent formState={formState} isMobile={isMobile} p2pAdvertiserPaymentMethods={p2pAdvertiserPaymentMethods} />
 * **/
const PaymentMethodsListContent = ({
    formState,
    isMobile,
    onAdd,
    onDelete,
    onEdit,
    onResetFormState,
    p2pAdvertiserPaymentMethods,
}: TPaymentMethodsListContentProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {
        delete: deleteAdvertiserPaymentMethod,
        error: deleteError,
        isSuccess: isDeleteSuccessful,
    } = p2p.advertiserPaymentMethods.useDelete();

    const { actionType, selectedPaymentMethod } = formState || {};
    const groupedPaymentMethods = useMemo(() => {
        const groups: TPaymentMethodsGroup = {};
        const sortedPaymentMethods = sortPaymentMethods(p2pAdvertiserPaymentMethods);
        sortedPaymentMethods?.forEach(advertiserPaymentMethod => {
            if (groups[advertiserPaymentMethod.type]) {
                groups[advertiserPaymentMethod.type]?.paymentMethods?.push(advertiserPaymentMethod);
            } else {
                groups[advertiserPaymentMethod.type] = {
                    paymentMethods: [advertiserPaymentMethod],
                    title: PAYMENT_METHOD_CATEGORIES[advertiserPaymentMethod.type],
                };
            }
        });
        return groups;
    }, [p2pAdvertiserPaymentMethods]);

    useEffect(() => {
        if (deleteError) {
            setIsModalOpen(true);
        }
    }, [isDeleteSuccessful, deleteError]);

    return (
        <div className='p2p-v2-payment-methods-list'>
            {!isMobile && <AddNewButton isMobile={isMobile} onAdd={onAdd} />}
            {Object.keys(groupedPaymentMethods)?.map(key => {
                return (
                    <div className='p2p-v2-payment-methods-list__group' key={key}>
                        <Text color='black' weight='bold'>
                            {groupedPaymentMethods[key].title}
                        </Text>
                        <div className='p2p-v2-payment-methods-list__group-body'>
                            {groupedPaymentMethods[key].paymentMethods?.map(advertiserPaymentMethod => {
                                return (
                                    <PaymentMethodCard
                                        isEditable
                                        key={advertiserPaymentMethod.id}
                                        onDeletePaymentMethod={() => {
                                            onDelete(advertiserPaymentMethod);
                                            setIsModalOpen(true);
                                        }}
                                        onEditPaymentMethod={() => {
                                            onEdit({
                                                displayName: advertiserPaymentMethod.display_name,
                                                fields: advertiserPaymentMethod.fields,
                                                id: advertiserPaymentMethod.id,
                                                method: advertiserPaymentMethod.method,
                                            });
                                        }}
                                        paymentMethod={advertiserPaymentMethod}
                                        shouldShowPaymentMethodDisplayName={false}
                                    />
                                );
                            })}
                        </div>
                    </div>
                );
            })}
            {actionType === 'DELETE' && (
                <PaymentMethodModal
                    description='Are you sure you want to remove this payment method?'
                    isModalOpen={isModalOpen}
                    onConfirm={() => {
                        deleteAdvertiserPaymentMethod(Number(selectedPaymentMethod?.id));
                        onResetFormState();
                    }}
                    onReject={() => {
                        setIsModalOpen(false);
                    }}
                    primaryButtonLabel='No'
                    secondaryButtonLabel='Yes, remove'
                    title={`Delete ${
                        selectedPaymentMethod?.fields?.bank_name?.value ??
                        selectedPaymentMethod?.fields?.name?.value ??
                        selectedPaymentMethod?.display_name
                    }?`}
                />
            )}
        </div>
    );
};

export default PaymentMethodsListContent;
