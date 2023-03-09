/**
 * File: /Users/heathdj/development/photo-tracker/client/src/app/_models/member.ts
 * Project: /Users/heathdj/development/photo-tracker/client
 * Created Date: Monday, March 6th 2023, 9:31:49 pm
 * Author: David Heath
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2023 BaldTraveler
 * ------------------------------------
 * Javascript will save your soul!
 */

import { Photo } from './photo';

export interface Member {
  id: number;
  userName: string;
  photoUrl: string;
  age: number;
  knownAs: string;
  created: Date;
  lastActive: Date;
  gender: string;
  introduction: string;
  lookingFor: string;
  interests: string;
  city: string;
  country: string;
  photos: Photo[];
}
