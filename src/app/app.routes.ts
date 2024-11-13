import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Импортируем компоненты страниц
import { HomeComponent } from './pages/home/home.component';
import { ClubMeetingsComponent } from './pages/club-meetings/club-meetings.component';
import { TrainingsComponent } from './pages/trainings/trainings.component';
import { CommunityComponent } from './pages/community/community.component';
import { AboutClubComponent } from './pages/about-club/about-club.component';
import { AmbassadorsComponent } from './pages/ambassadors/ambassadors.component';
import { TripsComponent } from './pages/trips/trips.component';
import { BooksComponent } from './pages/books/books.component';
import { HallOfFameComponent } from './pages/hall-of-fame/hall-of-fame.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'club-meetings', component: ClubMeetingsComponent },
  { path: 'trainings', component: TrainingsComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'about', component: AboutClubComponent },
  { path: 'ambassadors', component: AmbassadorsComponent },
  { path: 'trips', component: TripsComponent },
  { path: 'books', component: BooksComponent },
  { path: 'hall-of-fame', component: HallOfFameComponent },
  { path: 'contacts', component: ContactsComponent },
  // Редирект на главную для несуществующих маршрутов
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }