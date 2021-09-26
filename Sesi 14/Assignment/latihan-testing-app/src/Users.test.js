import { render, screen, fireEvent } from '@testing-library/react';
import UserList from './component/UserList';

test('Render Halaman Users dengan benar', () => {
    render(<UserList/>);
    // Mencari tombol tertentu
    // pastikan button kita memilki role="button"
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveTextContent('Back to Home')  
    
});
