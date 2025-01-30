'use client'
import { Provider } from 'react-redux';
import { store } from './(addtocartfun)/Redux/store';

const Providers = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div> 
     <Provider store={store}>

        {children}

     </Provider>
    </div>
  )
}

export default Providers