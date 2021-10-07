/*
    Membuat Button yang dapat dipakai disemua component
    dengan berbagai kondisi

    1. jika kondisi di backlog button akan menjalankan function handleTake dan nama button sesuai dengan kondisi jika di backlog diberikan nama Take
    2.jika kondisi di in progress button akan menjalankan function Evaluate dan nama button sesuai dengan kondisi jika di inprogress diberikan nama Evaluate
    3.jika kondisi di Evaluation akan menjalankan handleDone dan nama button sesuai dengan kondisi jika di Evaluation diberikan nama DONE
    4.Jika kondisi berada di DONE maka tidak menampilkan button

    untuk melakukan mapping terhadap button yang berbeda kita harus cek terlebih dahulu apakah yang di mapping di dalam kondisi Backlog,inprogress,evaluation atau done jika kondisi telah ditentukan dan sesuai dengan yang di tuju maka tampilkan button berikut functionnya
*/
import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Button(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  // const Convert = (newList , index) => {
  //   let convert = newList.splice(index, 1)
  //   let data = convert.join();
  //   return data;
  // }

  // menghandle function in Backlog to Inprogress
  const handleTake = (i) => {
    let newList = state.globalLog;
    let convert = newList.splice(i, 1);
    let data = convert.join();
    dispatch({
      type: "TAKE",
      payload: data,
    });
  };

  // menghandle function In progress to Evaluate
  const handleEvaluate = (i) => {
    let newList = state.inProgress;
    let convert = newList.splice(i, 1);
    let data = convert.join();
    dispatch({
      type: "EVALUATE",
      payload: data,
    });
  };

  // menghandle function In Evaluate to Done
  const handleDone = (i) => {
    let newList = state.evaluate;
    let convert = newList.splice(i, 1);
    let data = convert.join();
    dispatch({
      type: "DONE",
      payload: data,
    });
  };

  /*
  this function will be check if the name of case same with props.name
  and will be return the function
  */
  const handleAction = (i) => {
    console.log(i);
    switch (props.name) {
      case "Take":
        return handleTake(i);
      case "Evaluate":
        return handleEvaluate(i);
      case "Done":
        return handleDone(i);
      default:
        return "";
    }
  };

  return (
    <button
      className="bg-gray-700 text-white px-4"
      onClick={() => handleAction(props.index)}
    >
      {props.name}
    </button>
  );
}

export default Button;
