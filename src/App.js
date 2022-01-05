
// import formJSON from './formElement.json';
// import { useState, useEffect } from 'react';
// import { FormContext } from './FormContext';
// import FriendList from './components/fieldArray';
// import Form from './components/createForm';
// import Element from './components/Element';
// function App() {
//   const [elements, setElements] = useState(null);
//   useEffect(() => {
//     setElements(formJSON[0])

//   }, [])
//   const { fields, page_label } = elements ?? {}
//   const handleSubmit = (event) => {
//     event.preventDefault();

//     console.log(elements)
//   }
//   const handleChange = (id, event) => {
//     const newElements = { ...elements }
//     newElements.fields.forEach(field => {
//       const { field_type, field_id } = field;
//       if (id === field_id) {
//         switch (field_type) {
//           case 'checkbox':
//             field['field_value'] = event.target.checked;
//             break;

//           default:
//             field['field_value'] = event.target.value;
//             break;
//         }


//       }
//       setElements(newElements)
//     });
//     console.log(elements)
//   }
//   return (
//     <FormContext.Provider value={{ handleChange }}>

//       <div className="App container">
//         <h3>{page_label}</h3>
//         <form>
//           {fields ? fields.map((field, i) => <Element key={i} field={field} />) : null}
//           <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Submit</button>
//         </form>
//         <Form />
//         <FriendList />

//       </div>
//     </FormContext.Provider>
//   );
// }

// export default App;




import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import FriendList from './components/fieldArray';
import CallToActionIntro from './components/index'
import Form from './components/createForm';
import history from './helpers/history';
import Footer from './components/Footer';
import NavbarComponent from './components/Navbar';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import BasicTable from './components/answers';

const baseTheme = createMuiTheme();

function App() {
  //const alert = useSelector(state => state.alert);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //     history.listen((location, action) => {
  //         // clear alert on location change
  //         dispatch(alertActions.clear());
  //     });
  // }, []);

  return (
    <ThemeProvider theme={baseTheme}>
      <Router history={history}>
        <NavbarComponent />
        <Switch>
          {/* <NavbarComponent /> */}
          <Route path="/form/create" component={FriendList} />
          <Route path="/forms" component={BasicTable} />

          <Route path="/form" component={Form} />
          <Route path="/" component={FriendList} />

        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>

  );
}

export default App;

