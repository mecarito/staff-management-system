import { NbMenuItem } from '@nebular/theme';

export const menu: NbMenuItem[] = [
    {
        title: 'Dashboard',
        icon: 'home-outline',
        link: '/dashhome',
        home: false,
      },
      {
        title: 'FEATURES',
        group: true,
      },
      {
        title: 'Staff Information',
        icon: 'layout-outline',
        children: [
          {
            title: 'My Profile',
            link: '/staffinformation/myprofile',
          },
          {
            title: 'All Profiles',
            link: '/staffinformation/allprofiles',
          }
        ],
      },
      {
        title: 'Reports',
        icon: 'edit-2-outline',
        children: [
          {
            title: 'Upload Report',
            link: '/reports/uploadreport',
          },
          {
            title: 'Monthly Reports',
            link: '/reports/monthlyreport',
          },
          {
            title: 'Quarterly Reports',
            link: '/reports/Quarterlyreports',
          }
        ],
      },
      {
        title: 'Teaching Load',
        icon: 'keypad-outline',
        link: '/pages/ui-features',
        children: [
          {
            title: 'Add/delete Course ',
            link: '/teachingload/addcourse',
          },
          {
            title: 'Assign Course',
            link: '/teachingload/assingcourse',
          },
          {
            title: 'Past Teaching Load',
            link: '/teachingload/pasteachingload',
          }
        ],
      },
      {
        title: 'Meetings',
        icon: 'browser-outline',
        children: [
          {
            title: 'Organize a meeting',
            link: '/meetings/organizemeeting',
          },
          {
            title: 'Pending meetings',
            link: '/meetings/pendingmeetings',
          },
          {
            title: 'Past meetings',
            link: '/meetings/pastmeetings',
          }
        ],
      },
      {
        title: 'Letters',
        icon: 'message-circle-outline',
        children: [
          {
            title: 'Sent letters',
            link: '/letters/sentletters',
          },
          {
            title: 'Received letters',
            link: '/letters/receivedletters',
          }
        ],
      },
      {
        title: 'Leaves and holidays',
        icon: 'map-outline',
        children: [
          {
            title: 'Request a leave',
            link: '/leaves/askforleave',
          },
          {
            title: 'Pending leaves',
            link: '/leaves/pendingleaves',
          },
          {
            title: 'Staff on leave',
            link: '/leaves/staffonleave',
          }
        ],
      },
      {
        title: 'Proffesional Courses',
        icon: 'pie-chart-outline',
        children: [
          {
            title: 'Add new course',
            link: '/pdp/addnewcourse',
          },
          {
            title: 'List of courses',
            link: '/pdp/listofcourses',
          },
          {
            title: 'Course history',
            link: '/pdp/coursehistory',
          }
        ],
      },
      {
        title: 'Inventory',
        icon: 'text-outline',
        children: [
          {
            title: 'Electronics Lab',
            link: '/inventory/electroniclab',
          },
          {
            title: 'Computer Lab',
            link: '/inventory/computerlab',
          },
          {
            title: 'Offices',
            link: '/inventory/offices',
          }
        ],
      },
      {
        title: 'Final year projects',
        icon: 'grid-outline',
        children: [
          {
            title: 'Propose a title',
            link: '/fyp/proposetitle',
          },
          {
            title: 'Pending titles',
            link: '/fyp/pendingtitles',
          },
          {
            title: 'Accepted titles',
            link: '/fyp/acceptedtitles',
          },
          {
            title: 'Past year projects',
            link: '/fyp/pastyearprojects',
          }
        ],
      },
      {
        title: 'Settings',
        icon: 'shuffle-2-outline',
        children: [
          {
            title: 'changing a theme',
            link: '/settings',
          },
        ],
      }
];
