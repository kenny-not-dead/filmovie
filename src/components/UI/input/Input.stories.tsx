import { Input, InputProps } from './Input';
export default {
	title: 'UI/Input',
	component: Input,
	argTypes: {
		variant: { type: 'string', description: 'Основной вариант инпута' },
	},
};

const Template = (args: InputProps) => <Input {...args} />;

export const Default = Template.bind({});
