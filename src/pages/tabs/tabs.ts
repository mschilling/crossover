import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';ß
import { MovieListPage } from '../movie-list/movie-list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = MovieListPage;
  tab3Root: any = AboutPage;
  tab4Root: any = ContactPage;

  constructor() {

  }
}
