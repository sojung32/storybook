import React from 'react';
import PropTypes from 'prop-types';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Badge } from 'antd';

export const AvatarAntD = ({badge, badgeColor, count, dot, label, square, icon, ...props }) => {
    const shape = square ? 'square' : '';
    const iconUse = icon ? <UserOutlined /> : null;
    
    if(badge){
        return (
            <Badge color={badgeColor} count={count} dot={dot}>
                <Avatar shape={shape} {...props} icon={iconUse}>{label}</Avatar>
            </Badge>
        );
    } else {
        return (
            <Avatar shape={shape} {...props} icon={iconUse}>{label}</Avatar>
        );
    }
};

AvatarAntD.propTypes = {
    badge: PropTypes.bool, // badge 사용 여부
    badgeColor: PropTypes.oneOf([
        'pink',
        'red', 
        'yellow',
        'orange',
        'cyan',
        'green',
        'blue',
        'purple',
        'geekblue',
        'magenta',
        'volcano',
        'gold',
        'lime',]),
    count: PropTypes.number,
    dot: PropTypes.bool,
    square: PropTypes.bool, // true: 네모 / false: 동그라미
    size: PropTypes.number,
    label: PropTypes.string,
    icon: PropTypes.bool,
}
AvatarAntD.defaultProps = {
    badge: false,
    dot: true,
    square: false,
    size: 32,
    label: null,
    icon: true,
}

