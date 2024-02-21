import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { plusCartCount, minusCartCount } from '../store';


export default function Cart() {

    
    let cart = useSelector((state)=>{ return state.basket })
    let dispatch = useDispatch()

    return(
        <div>
            <Table>
            <thead>
                <tr>
                <th>#</th>
                <th>상품명</th>
                <th>수량</th>
                <th>변경하기</th>
                </tr>
            </thead>
            <tbody>
                {
                cart.map(product => {
                return(
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.count}</td>
                    <td>
                        <button onClick={ () => {dispatch(plusCartCount(product.id))}}>+</button>
                        <button onClick={ () => {dispatch(minusCartCount(product.id))}}>-</button>
                    </td>
                </tr>
                );
                })
                }
            </tbody>
            </Table> 
        </div>
    )
}