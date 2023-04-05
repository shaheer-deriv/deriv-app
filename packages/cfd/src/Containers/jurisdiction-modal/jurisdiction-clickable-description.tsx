import { Text } from '@deriv/components';
import { TJurisdictionClickableDescriptionProps } from 'Containers/props.types';
import React from 'react';

const JurisdictionClickableDescription = ({
    clickable_description,
    toggleCardFlip,
}: TJurisdictionClickableDescriptionProps) => {
    return (
        <div>
            {clickable_description.map(description_part => {
                return description_part.type === 'link' ? (
                    <span onClick={toggleCardFlip}>
                        <Text as='span' size='xxs' className='clickable-description-link'>
                            {description_part.text}
                        </Text>
                        &nbsp;
                    </span>
                ) : (
                    <Text key={description_part.text} as='span' size='xxs'>
                        {description_part.text}
                    </Text>
                );
            })}
        </div>
    );
};

export default JurisdictionClickableDescription;
