import React from 'react';
import { Form, Formik, FormikValues } from 'formik';
import { InferType } from 'yup';
import { Button } from '@deriv-com/ui';
import { TManualDocumentTypes } from '../../constants/manualFormConstants';
import { getManualFormValidationSchema } from '../../utils/manualFormUtils';
import { ManualFormDocumentUpload } from './manualFormDocumentUpload';
import { ManualFormFooter } from './manualFormFooter';
import { ManualFormInputs } from './manualFormInputs';

type TManualDocumentDetailsForm = InferType<ReturnType<typeof getManualFormValidationSchema>>;

type TManualFormProps = {
    formData: FormikValues;
    onCancel: () => void;
    onSubmit: (values: TManualDocumentDetailsForm) => void;
    selectedDocument: TManualDocumentTypes;
};

export const ManualForm = ({ formData, onCancel, onSubmit, selectedDocument }: TManualFormProps) => {
    const validationSchema = getManualFormValidationSchema(selectedDocument);

    const initialValues = validationSchema.cast({
        document_expiry: formData.document_expiry ?? validationSchema.getDefault().document_expiry,
        document_number: formData.document_number ?? validationSchema.getDefault().document_number,
    });

    return (
        <div className='m-400 p-800 border-100 border-solid rounded-400'>
            <Formik
                initialValues={initialValues as TManualDocumentDetailsForm}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({ isValid, values }) => {
                    console.log('Form values: ', values);
                    return (
                        <Form>
                            <div className='flex flex-col gap-1200 max-w-[67rem]'>
                                <ManualFormInputs selectedDocument={selectedDocument} />
                                <ManualFormDocumentUpload selectedDocument={selectedDocument} />
                                <ManualFormFooter />
                                <div className='flex justify-end gap-800 bg-vp px-400 py-800 border-t-solid-grey-2 border-solid border-t-100'>
                                    <Button onClick={onCancel} type='button' variant='outlined'>
                                        Back
                                    </Button>
                                    <Button disabled={!isValid}>Next</Button>
                                </div>
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
};
