import { SummaryPipe } from './displaying-data-handling-events/summary.pipe';
import { CourseService } from './course.service';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentExampleComponent } from './component-example/component-example.component';
import { DisplayingDataHandlingEventsComponent } from './displaying-data-handling-events/displaying-data-handling-events.component';
import { ExerciseFavoriteComponentComponent } from './exercise-favorite-component/exercise-favorite-component.component';
import { ExerciseTitlecaseComponent } from './exercise-titlecase/exercise-titlecase.component';
import { ComponentAPIComponent } from './component-api/component-api.component';
import { NgContentNgContainerComponent } from './ng-content-ng-container/ng-content-ng-container.component';
import { DirectivesComponent } from './directives/directives.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { FormatDirective } from './directives/format.directive';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DynamicRoutesComponent } from './dynamic-routes/dynamic-routes.component';
import { RecordsComponent } from './records/records.component';
//import { ExerciseOneComponent } from './exercise-one/exercise-one.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentExampleComponent,
    DisplayingDataHandlingEventsComponent,
    SummaryPipe,                                             //this is a custom pipe we made. it should be decleared in here same as a component
    ExerciseFavoriteComponentComponent,
    ExerciseTitlecaseComponent,
    ComponentAPIComponent,
    NgContentNgContainerComponent,
    DirectivesComponent,
    SwitchCaseComponent,
    FormatDirective,
    TemplateDrivenFormsComponent,
    NavBarComponent,
    DynamicRoutesComponent,
    RecordsComponent                                            
    //ExerciseOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //should enter unique paths first 
    //for an example, if we have two paths 1 - followers, 2 - followers/:username
    //in here we should add followers/:username first before followers because followers word is present in the followers/:username
    //because of this if this instead of loading the followers/:username angular will load the followers
    RouterModule.forRoot([
      {
        path: 'templateDriven', 
        component: TemplateDrivenFormsComponent
      },
      {
        path: 'displayData', 
        component: DisplayingDataHandlingEventsComponent
      },
      {
        path: 'ngContent', 
        component: NgContentNgContainerComponent
      },
      {
        path: 'dynamicRoutes/:id', 
        component: RecordsComponent
      },
      {
        path: 'dynamicRoutes', 
        component: DynamicRoutesComponent
      },
      //so this ** will catch any url thats not difined in our routes. we can use this and let the user navigate to a error page by creating an error component.
      {
        path: '**',
        component: ComponentAPIComponent
      }
    ])
  ],
  providers: [
    CourseService                                              //we put all the dependancies inside this provider, it is related to dependancy injection
    //and also angular will create single instance of this class for the entire module, so many companants will access it by that single instance. this is called a SINGLETON
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
