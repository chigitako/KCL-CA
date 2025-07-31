declare module 'react-calendar' {
    import React from 'react';

    export interface CalendarProps {
        onChange?: (value: Date | Date[]) => void;
        value?: Date | Date[];
        locale?: string;
        className?: string;
    }

    const Calendar: React.FC<CalendarProps>;
    export default Calendar;
}
