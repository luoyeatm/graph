function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import CalendarLocale from '../../vc-calendar/src/locale/ga_IE';
import TimePickerLocale from '../../time-picker/locale/ga_IE'; // Merge into a locale object

var locale = {
  lang: _extends({
    placeholder: 'Select date',
    rangePlaceholder: ['Start date', 'End date']
  }, CalendarLocale),
  timePickerLocale: _extends({}, TimePickerLocale)
}; // All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

export default locale;