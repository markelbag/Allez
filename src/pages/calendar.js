import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import Layout from '../components/layout'

export default class DemoApp extends React.Component {
  render() {
    return (
        <Layout>
        <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        weekends={false}
        events={[
          { title: 'See Baktiar', date: '2020-08-18' },
          { title: 'Do stuff at 12:45?', date: '2020-08-19' }
        ]}
      />
      </Layout>
    )
  }
}