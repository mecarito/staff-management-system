import { NbMenuItem } from '@nebular/theme';

export const menu: NbMenuItem[] = [
    {
        title: 'Dashboard',
        icon: 'home-outline',
        link: 'home',
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
            link: '/pages/layout/stepper',
          },
          {
            title: 'All Profiles',
            link: '/pages/layout/list',
          }
        ],
      },
      {
        title: 'Reports',
        icon: 'edit-2-outline',
        children: [
          {
            title: 'Upload Report',
            link: '/pages/forms/inputs',
          },
          {
            title: 'Monthly Reports',
            link: '/pages/forms/layouts',
          },
          {
            title: 'Quarterly Reports',
            link: '/pages/forms/buttons',
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
            link: '/pages/ui-features/grid',
          },
          {
            title: 'Assign Course',
            link: '/pages/ui-features/icons',
          },
          {
            title: 'Past Teaching Load',
            link: '/pages/ui-features/typography',
          }
        ],
      },
      {
        title: 'Meetings',
        icon: 'browser-outline',
        children: [
          {
            title: 'Organize a meeting',
            link: '/pages/modal-overlays/dialog',
          },
          {
            title: 'Pending meetings',
            link: '/pages/modal-overlays/window',
          },
          {
            title: 'Past meetings',
            link: '/pages/modal-overlays/popover',
          }
        ],
      },
      {
        title: 'Letters',
        icon: 'message-circle-outline',
        children: [
          {
            title: 'Sent letters',
            link: '/pages/extra-components/calendar',
          },
          {
            title: 'Received letters',
            link: '/pages/extra-components/progress-bar',
          }
        ],
      },
      {
        title: 'Leaves and holidays',
        icon: 'map-outline',
        children: [
          {
            title: 'Request a leave',
            link: '/pages/maps/gmaps',
          },
          {
            title: 'Pending leaves',
            link: '/pages/maps/leaflet',
          },
          {
            title: 'Staff on leave',
            link: '/pages/maps/bubble',
          }
        ],
      },
      {
        title: 'Proffesional Courses',
        icon: 'pie-chart-outline',
        children: [
          {
            title: 'Add new course',
            link: '/pages/charts/echarts',
          },
          {
            title: 'List of courses',
            link: '/pages/charts/chartjs',
          },
          {
            title: 'Course history',
            link: '/pages/charts/d3',
          }
        ],
      },
      {
        title: 'Inventory',
        icon: 'text-outline',
        children: [
          {
            title: 'Electronics Lab',
            link: '/pages/editors/tinymce',
          },
          {
            title: 'Computer Lab',
            link: '/pages/editors/ckeditor',
          },
          {
            title: 'Offices',
            link: '/pages/editors/ckeditor',
          }
        ],
      },
      {
        title: 'Final year projects',
        icon: 'grid-outline',
        children: [
          {
            title: 'Propose a title',
            link: '/pages/tables/smart-table',
          },
          {
            title: 'Pending titles',
            link: '/pages/tables/tree-grid',
          },
          {
            title: 'Accepted titles',
            link: '/pages/tables/tree-grid',
          },
          {
            title: 'Past year projects',
            link: '/pages/tables/tree-grid',
          }
        ],
      },
      {
        title: 'Settings',
        icon: 'shuffle-2-outline',
        children: [
          {
            title: 'changing a theme',
            link: '/pages/miscellaneous/404',
          },
        ],
      }
];
