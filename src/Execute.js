import React, {Component} from 'react'
import Calculate from "./Calculate";
import Modal from "./Modal";

class Execute extends Component {
  constructor(props) {
    super(props);

    this.state = {
        calcItems: null,
        showItems: false,
        visible: 'none'
      }

    this.executeCalc = this.executeCalc.bind(this)
    this.handlerClick = this.handlerClick.bind(this)
  }

  executeCalc (e) {
    const income = this._inputIncome.value
    const costs = this._inputCosts.value
    const sum = income - costs

    if (income && costs !== '') {
      const calcItems = [
        {name: 'Расходы на жилье', cost: sum * 0.20},
        {name: 'Расходы на питание', cost: sum * 0.15},
        {name: 'Расходы на авто/транспорт', cost: sum * 0.10},
        {name: 'Расходы на развлечения', cost: sum * 0.10},
        {name: 'Инвестиции/вклады', cost: sum * 0.15},
        {name: 'Ваш остаток составляет', cost: sum - (sum * 0.70)}
      ]
      this.setState({
        calcItems,
        showItems: true,
        visible: 'block'
      })
    }
    this._inputCosts.value = ''
    this._inputIncome.value = ''

    e.preventDefault()
  }

  handlerClick() {
    this.setState({
      visible: 'none'
    })
  }


  render() {
    let result = null
    if ( this.state.showItems ) {
    result = this.state.calcItems.map((item, index) => {
      return (
        <Calculate
          key={index}
          name={item.name}
          cost={item.cost}
        />
      )
    }) }

    return (
      <div className="wrapper">
        <h1>Калькулятор распределения расходов</h1>
        <form
          className="form"
          onSubmit={this.executeCalc}
        >
          <label htmlFor="income">Доходы</label>
          <input
            ref={(i) => this._inputIncome = i}
            id="income"
            type="text"
            placeholder="Сумма Вашего ежемесячного дохода"
          />
          <label htmlFor="costs">Расходы</label>
          <input
            ref={(c) => this._inputCosts = c}
            id="costs"
            type="text"
            placeholder="Сумма обязательных ежемесячных расходов"
          />
          <button type="submit">Рассчитать</button>
        </form>
        <Modal
          visible={this.state.visible}
          handlerClick={this.handlerClick}
        >
          { result }
        </Modal>
      </div>
    )
  }
}

export default Execute