import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import Layout from '../components/layout'
import SEO from "../components/seo";

export default class DemoApp extends React.Component {
  render() {
    return (
        <Layout>
             <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Calendar"
      />

        <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        weekends={true}
        events={[
          { title: 'Beginner Nashua', backgroundColor: 'gray',daysOfWeek: [2,4], starRecur: '2020-10-01', startTime: '17:00', endTime: '18:00'  },
          { title: 'B.Adult Nashua', backgroundColor: 'gray',daysOfWeek: [4], starRecur: '2020-10-01', startTime: '18:00', endTime: '19:00'  },
          { title: 'Int. Nashua', backgroundColor: 'gray',daysOfWeek: [2,4], starRecur: '2020-10-01', startTime: '18:00', endTime: '19:30'  },
          { title: 'Comp Nashua', backgroundColor: 'gray',daysOfWeek: [2,4], starRecur: '2020-10-01', startTime: '19:00', endTime: '21:00'  },
          { title: 'Comp Nashua', backgroundColor: 'gray', daysOfWeek: [6], starRecur: '2020-10-01', startTime: '09:00', endTime: '11:00'  },
          { title: 'Beginner Salem', backgroundColor: 'orange', daysOfWeek: [1,3], starRecur: '2020-10-01', startTime: '17:00', endTime: '18:00'  },
          { title: 'B.Adult Salem', backgroundColor: 'orange',daysOfWeek: [3], starRecur: '2020-10-01', startTime: '18:00', endTime: '19:00'  },
          { title: 'Int. Salem', backgroundColor: 'orange',daysOfWeek: [1,3], starRecur: '2020-10-01', startTime: '18:00', endTime: '19:30'  },
          { title: 'Comp Salem', backgroundColor: 'orange',daysOfWeek: [1,3], starRecur: '2020-10-01', startTime: '19:00', endTime: '21:00'  },
          { title: 'Comp Salem', backgroundColor: 'orange',daysOfWeek: [5], starRecur: '2020-10-01', startTime: '09:00', endTime: '11:00'  },
          { title: 'COMPETITION DAY', borderColor: 'orange', textColor: 'orange', backgroundColor: 'gray',daysOfWeek: [0], starRecur: '2020-10-01'},
        ]}
      />
      </Layout>
    )
  }
}