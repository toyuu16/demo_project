import { Button } from 'antd'
const PrimaryButton = (props: IPrimaryButton) => {
    const { size, name } = props;
    return (
        <>
            <Button type="primary" size={size}>
                {name}
            </Button>
        </>
    )
};

export default PrimaryButton;

interface IPrimaryButton {
    size: 'large' | 'middle' | 'small';
    name: string;
}