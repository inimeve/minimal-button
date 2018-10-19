import './minimal-button.css';

import * as angular from "angular";
import { MinimalButtonComponent } from "./minimal-button.component";

export const MinimalButtonModule = angular.module('minimal-button', [])
    .component('minimalButton', new MinimalButtonComponent())
    .name;
