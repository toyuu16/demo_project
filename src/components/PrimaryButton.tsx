import { Button } from 'antd'
const PrimaryButton = (props: IPrimaryButton) => {
    const {
        size = 'middle',
        name,
        className,
        disabled,
        ghost,
        action,
    } = props;

    return (
        <>
            <Button
                type="primary"
                size={size}
                className={className}
                disabled={disabled}
                ghost={ghost}
                onClick={() => action}
            >
                {name}
            </Button>

        </>
    )
};

export default PrimaryButton;

interface IPrimaryButton {
    size?: 'large' | 'middle' | 'small';
    name: string;
    className?: string;
    disabled?: boolean;
    ghost?: boolean;
    action: () => Function;
}