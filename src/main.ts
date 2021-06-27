//import { ExerciseOneComponent } from './app/exercise-one/exercise-one.component';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

/*this section includes the exercise one implementation.
let component = new ExerciseOneComponent(10, true);
component.addLike();
console.log(`Likes count: ${component.Likes}, Is selected: ${component.Status}`)*/

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
