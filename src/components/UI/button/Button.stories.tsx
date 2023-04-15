import { Button, BtnProps } from './Button'
import phone from '../../../static/svgs/phone.svg'
export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    variant: { type: 'string', description: 'Основной вариант кнопки' },
  },
}

const Template = (args: BtnProps) => <Button {...args} />

export const Default = Template.bind({})
