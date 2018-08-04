import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.sass',
  shadow: true
})
export class MyComponent {

  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <div class="card">
        <div class="card-panel">
          <div class="card-left">
            <h1>$145.00</h1>
            <span>TOTAL AMOUNT</span>
          </div>
          <div class="card-right">
            <div class="header">
              <div class="icon">
                <img src="https://resmim.net/f/HZIMhD.png" alt="" />
              </div>
              <div class="logo">
                <img src="https://resmim.net/f/W1cvAC.png" alt="" />
              </div>
            </div>
            <div class="form">

              <div class="input-field">
                <input type="text" placeholder="Card Number" />
              </div>

              <div class="input-field">
                <input type="text" placeholder="Card Holdee" />
              </div>


              <div class="col-6 input-field mr-20">
                <input type="text" placeholder="CVC Date" />
              </div>


              <div class="col-6 input-field">
                <input type="text" placeholder="CVC" />
              </div>


              <button class="card-button">PAY BILL</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

