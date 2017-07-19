import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RedditProvider } from './reddit';
import { IonicModule, Platform, NavController} from 'ionic-angular/index';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PlatformMock, StatusBarMock, SplashScreenMock } from '../../../test-config/mocks-ionic';
import { HttpModule  } from '@angular/http';

describe('RedditProvider', () => {
  let testObject: RedditProvider;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        NavController,
        { provide: Platform, useClass: PlatformMock},
        { provide: StatusBar, useClass: StatusBarMock },
        { provide: SplashScreen, useClass: SplashScreenMock },
        RedditProvider
      ]
    });
  }));

  beforeEach(inject([RedditProvider], (redditProvider: RedditProvider) => {
    testObject = redditProvider;
  }));

  it('should create component', () => expect(testObject).toBeDefined());

  it('getAll should return a list of articles', async(() => {
    // testObject.getAllXbox()
    //   .subscribe( (value) => {
    //   console.log(value);
    // } );
  }));

});
