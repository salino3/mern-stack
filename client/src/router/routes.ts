interface Routes {
    root: string;
    newtask: string;
    not_found: string;
    edit_task: string;
};

export const switchRoutes: Routes = {
    root: '/',
    newtask: '/new',
    not_found: '/*',
    edit_task: '/edit/:id'
};