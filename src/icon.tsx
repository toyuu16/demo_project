import { Space } from 'antd';
import { SmileTwoTone, HeartTwoTone, CheckCircleTwoTone } from '@ant-design/icons';

const Icon = () => {
    return (
        <>
            <Space>
                <SmileTwoTone />
                <HeartTwoTone twoToneColor="#eb2f96" />
                <CheckCircleTwoTone twoToneColor="#52c41a" />
            </Space>
        </>
    );

};

export default Icon;
