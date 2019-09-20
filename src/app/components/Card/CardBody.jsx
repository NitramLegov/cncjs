import cx from 'classnames';
import React from 'react';
import Resolver from './Resolver';
import styles from './styles/index.styl';
import { tagPropType } from './utils';

const CardBody = ({
    className,
    style,
    tag: Component,
    ...props
}) => (
    <Resolver>
        {value => {
            const { spacerX } = value;
            style = {
                padding: `${spacerX}`,
                ...style,
            };

            return (
                <Component
                    {...props}
                    style={style}
                    className={cx(className, styles.cardBody)}
                />
            );
        }}
    </Resolver>
);

CardBody.propTypes = {
    tag: tagPropType,
};

CardBody.defaultProps = {
    tag: 'div',
};

export default CardBody;