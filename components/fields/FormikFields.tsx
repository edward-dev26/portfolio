import withFormikField from './withFormikField';

import Input from './Input/Input';
import TextArea from './TextArea/TextArea';

export const InputField = withFormikField(Input);
export const TextAreaField = withFormikField(TextArea);
