import React, { useEffect, useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { calendarStyles } from './calendarStyles/calendarStyles';

const Calendar = ({navigation, route}) => {

    const [date, setDate] = useState(null);
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [dateFormat, setDateFormat] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);
    const [datos, setDatos] = useState(route.params.data || null);

    const onchange = (event,selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
    };

    const convertirDig = (n) => {
        return (n < 10) ? '0'+n : n;
    }

    useEffect(()=>{
        navigation.setOptions({
            headerRight: ''
        });
    },[]);

    useEffect(()=>{
        if (date) {
            const [dia, mes, anio] = [convertirDig(date.getDate()), 
                convertirDig(date.getMonth()+1),
                convertirDig(date.getFullYear())];
            setDateFormat(`${dia}/${mes}/${anio}`);
            setIsDisabled(false);
        }
    },[date])

    return (
        <View style={{backgroundColor: 'white', height: '100%'}}>
            <View style={calendarStyles.contCalendar}>
                <Text style={calendarStyles.labelText}>Titulo:</Text>
                <TextInput 
                    placeholder='Titulo'
                    style={calendarStyles.textInput}
                    editable={false}
                    value={datos? datos.tramite: ''}
                    multiline={true}
                />
                <Text style={calendarStyles.labelText}>Detalle:</Text>
                <TextInput
                    multiline={true}
                    numberOfLines={3} 
                    placeholder='Detalle'
                    style={calendarStyles.textAreaInput}
                    value={datos? datos.detalle: ''}
                />
                <Text style={calendarStyles.labelText}>Recordatorio</Text>    
                <TouchableOpacity
                    style={calendarStyles.buttonCalendar}
                    onPress={() => setShow(!show)}
                >
                    <Text style={calendarStyles.buttonCalendarText}>
                        {(date)?(dateFormat):("Ingrese Una Fecha")}
                    </Text>
                </TouchableOpacity>
                {
                    (show) && (
                        <DateTimePicker
                            value={date? date: new Date()}
                            mode={mode}
                            is24Hour={true}
                            display='default'
                            onChange={onchange}   
                        />
                    )
                }
                <View style={calendarStyles.contButtons}>
                    <TouchableOpacity
                        style={calendarStyles.buttonOptions}
                    >
                        <Text style={calendarStyles.buttonText}>
                            Descartar Recordatorio
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        disabled={isDisabled}
                        style={isDisabled?calendarStyles.buttonOptionDisabled:calendarStyles.buttonOptions}
                    >
                        <Text style={isDisabled?calendarStyles.buttonTextDisabled:calendarStyles.buttonText}>
                            Guardar Recordatorio
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Calendar;