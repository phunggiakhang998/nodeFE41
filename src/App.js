import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import HeaderRFC from "./components/HeaderRFC";
import BaiTapDanLayout from "./components/BtapDanLayout/BaiTapDanLayout";
import DataBinding from "./components/DataBinding/DataBinding";
import EventBinding from "./components/DataBinding/EventBinding";
import State from "./components/state/State";
import ExState from "./components/state/ExState";
import ExState2 from "./components/state/ExState2";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import DemoProps from "./Props/DemoProps";
import BT2Product from "./Props/BtapLayOut2/BT2Product";
import BT3PhoneList from "./Props/BT3PhoneList/BT3PhoneList";
import BTCart from "./Props/BTCart/BTCart";
import TodoApp from "./TodoApp/TodoApp";
import CartsRedux from "./Props/GioHangRedux/CartsRedux";
import BaiTapForm from "./QuanLySinhVien/BaiTapForm";
import LifeCycle from "./lifecycle";

function App() {
  return (
    <div className="App">
      {/* <LifeCycle /> */}
      {/* <BaiTapDanLayout /> */}
      {/* <DataBinding /> */}
      {/* <EventBinding /> */}
      {/* <State /> */}
      {/* <ExState /> */}
      {/* <ExState2 /> */}
      {/* <RenderWithMap /> */}
      {/* <DemoProps /> */}
      {/* <BT2Product /> */}
      {/* <BT3PhoneList /> */}
      {/* <BTCart /> */}
      {/* <TodoApp /> */}
      {/* <CartsRedux /> */}
      <BaiTapForm />
    </div>
  );
}

export default App;
