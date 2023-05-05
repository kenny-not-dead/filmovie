import { Button, BtnProps } from './Button'

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    variant: { type: 'string', description: 'Основной вариант кнопки' },
  },
}

const Template = (args: BtnProps) => <Button {...args} />

export const Default = Template.bind({})
