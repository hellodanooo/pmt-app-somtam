import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const DatePicker = ({chosenDate}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [chosenDate, setChosenDate] = useState(null)

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    hideDatePicker();
    setSelectedDate(date);
    // You can do something with the selected date here
  };

  return (
    <View>
      <TouchableOpacity onPress={showDatePicker}>
        <Text>Show Date Picker</Text>
      </TouchableOpacity>
      <Text>Selected Date: {selectedDate ? selectedDate.toDateString() : 'No date selected'}</Text>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date" // You can also use "time" or "datetime" for time picker or date & time picker
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default DatePicker;
