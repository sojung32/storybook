import React from 'react';
import PropTypes from 'prop-types';
import { Rate } from 'antd';
import { FrownOutlined, MehOutlined, SmileOutlined, HeartOutlined } from '@ant-design/icons';

const smileIcons = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
  };

export const RateAntD = ({ character, icon, ...props }) => {
    if(icon == 'star'){
        return (
            <Rate {...props} />
        );
    } else if (icon == 'heart'){
        return (
            <Rate character={<HeartOutlined />} {...props} />
        );
    } else if(icon == 'smile'){
        return (
            <Rate character={({index}) => smileIcons[index + 1]} {...props} />
        );
    } else {
        return (
            <Rate character={character} {...props} />
        );
    }
};

RateAntD.propTypes = {
    allowClear: PropTypes.bool, // 다시 클릭하면 초기화
    allowHalf: PropTypes.bool, // 0.5 사용여부
    character: PropTypes.string,
    disabled: PropTypes.bool,
    icon: PropTypes.oneOf([
        'star',
        'heart',
        'smile',
        'input character',
    ]),
}
RateAntD.defaultProps = {
    allowClear: false,
    allowHalf: false,
    icon: 'star',
}

