import Form from './Form'

export default {
  title: 'Example/Form',
  component: Form,
  tags: ['autodocs'],
  argTypes: {
    multiple: { control: 'boolean' },
    renderOption: { control: 'boolean' },
    withSearch: { control: 'boolean' },
    options: { control: 'object' },
    outlined: { control: 'boolean' },
    optionLabel: { control: 'text' },
    id: { control: 'text' },
    zIndex: { control: 'number'}
  },
  args: {
    multiple: true,
    renderOption: true,
    withSearch: true,
    options: [
      { id: 1, label: 'Option 1' },
      { id: 2, label: 'Option with icon' },
      { id: 3, label: 'Long Long Option 3' },
      { id: 4, label: 'Long Long Long Option 4' },
      { id: 5, label: 'Long Long Long Long Option 5' },
      { id: 6, label: 'Long Long Long Long Long Option 6' },
    ],
    outlined: false,
    optionLabel: 'Label',
    id: 'sdd-1',
    zIndex: 1000
  },
};

export const SelectDropdownField = {
  args: {
    renderOption: false
  },
};