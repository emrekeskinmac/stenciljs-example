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
            <h2>$145.00</h2>
            <span>TOTAL AMOUNT</span>
          </div>
          <div class="card-right">
            <div class="header">
              <div class="icon">
                <img src="https://resmim.net/f/HZIMhD.png" alt=""/>
              </div>
              <div class="logo"> 
                <img src="https://resmim.net/f/W1cvAC.png" alt=""/>
              </div>
            </div>
            <div class="form">

              <div class="input-field">
                <input id="1" type="text" />
                <label htmlFor="1" >Last Name</label>
              </div>

              <div class="input-field">
                <input id="1" type="text" />
                <label htmlFor="1" >Last Name</label>
              </div>

              <div class="input-field">
                <input id="1" type="text" />
                <label htmlFor="1" >Last Name</label>
              </div>



              <button class="card-button">PAY BILL</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

