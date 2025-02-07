import React, { useState } from "react";
function App() {
  return (
    <div style={{ background: "#dfe6e9", height: "100vh" }}>
      <ToggleMessage />
      <ToggleMessage />
      <ToggleMessage />
    </div>
  );
}

const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(true); // defining a new state variable
  //  when the value of a state variable chages,
  // the component that uses the state variable re-renders
  function toggle() {
    setIsVisible(!isVisible);
  }
  return (
    <div>
      <button onClick={toggle}>Toggle Message</button>
      {isVisible && <p>This message is conditionally rendered!</p>}
    </div>
  );
};

export default App;

// "https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg" -> image
// name - harkirat singh
// followerCount - 23,456 followers
// time - 2 min ago
// description -want to know people win big check out how these folks won 6000 dollars
/*
 ternary operator
 {(time !== undefined) ? (
            <div style={{ display: "flex" }}>
              <div style={{ paddingRight: 3 }}>{time} min ago</div>
              <img
                src={
                  "https://thumbs.dreamstime.com/b/black-round-wall-clock-isolated-white-vector-illustration-166769728.jpg"
                }
                style={{ width: 12, height: 12 }}
              />
            </div>
          ): null}
 
 */
// -----------------------------------------------------------------------------------------------------------------------

// <div style={style}>
//       <div style={{ display: "flex" }}>
//         <img
//           src={image}
//           style={{
//             height: 40,
//             width: 40,
//             borderRadius: 20,
//           }}
//         />
//         <div style={{ fontSize: 10, marginLeft: 10 }}>
//           <b>{name}</b>
//           <div>{subtitle} </div>
//           {time !== undefined && (
//             <div style={{ display: "flex" }}>
//               <div style={{ paddingRight: 3 }}>{time} min ago</div>
//               <img
//                 src={
//                   "https://thumbs.dreamstime.com/b/black-round-wall-clock-isolated-white-vector-illustration-166769728.jpg"
//                 }
//                 style={{ width: 12, height: 12 }}
//               />
//             </div>
//           )}
//         </div>
//       </div>
//       <div style={{ fontSize: 12 }}>{description}</div>
//     </div>

// const style = {
//   width: 200,
//   backgroundColor: "white",
//   borderRadius: 10,
//   borderColor: "grey",
//   borderWidth: 1,
//   padding: 20,
// };

// <div
// style={{
//   backgroundColor: "#dfe6e9",
//   height: "100vh",
// }}
// >
// <div style={{ display: "flex", justifyContent: "center" }}>
//   <div>
//     <div>
//       <PostComponent
//         name={"Harkirat"}
//         image={
//           "https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
//         }
//         subtitle={"30 followers"}
//         time={"3"}
//         description={
//           "want to know people win big check out how these folks won 6000 dollars"
//         }
//       />
//       <br />
//     </div>
//     <div>
//       <PostComponent
//         name={"Raman"}
//         image={
//           "https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
//         }
//         subtitle={" promoted"}
//         description={
//           "How to get hired in 2024, I lost my job in 2023 and want a job"
//         }
//       />
//       <br />
//     </div>
//   </div>
// </div>
// </div>
