import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService,
         NbSidebarService, NbThemeService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { menu } from './dashboardmenu';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private breakpointService: NbMediaBreakpointsService ) {}


  menus =  menu;
  private destroy$: Subject<void> = new Subject<void>();
  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    }
  ];

  currentTheme = 'default';

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  getselected() {
    let currentTheme: number;
    const { xl } = this.breakpointService.getBreakpointsMap();

    console.log( this.breakpointService.getBreakpointsMap());
    this.themeService.onMediaQueryChange().subscribe(
      ([, value]) => currentTheme = value.width
    );

    this.menuService.onItemClick().subscribe(
      value => {
        currentTheme < xl && value.item.title ?
        this.sidebarService.collapse('menu-sidebar') :
        this.sidebarService.expand('menu-sidebar');
      }
    );
  }

  navigateHome() {
    this.menuService.navigateHome();
    return true;
  }
}



