import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from '../store';

export const useCalendarStore = () => { 

    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector(state => state.calendar);

    const setActiveEvent = (calendarEvent) => { // evento en detalle
        dispatch(onSetActiveEvent(calendarEvent))
    }

    const startSavingEvent = async (calendarEvent) => {
       

        if (calendarEvent._id) {
            // Actualiza
            dispatch(onUpdateEvent({ ...calendarEvent }));
        } else {
            // Crea
            dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
        }
    }

    const startDeletingEvent = () => {
        // Llegar al backend
        dispatch(onDeleteEvent());
    }


    return {
        activeEvent,
        events,
        hasEventSelected: !!activeEvent, // si existe regresa true, sino regresa falso

        startDeletingEvent,
        setActiveEvent,
        startSavingEvent,
    }
}
