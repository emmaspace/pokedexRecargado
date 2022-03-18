import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { RandomButtonComponent as Button } from './../app/components/random-button/random-button.component';

storiesOf("Random Button", module).add("Random button", ()=>({
  component: Button,
  props:{
    title:"Random button",
    arrRandom: action("Random activado"),
  }
}))