interface Routes {
    root: string;
    newtask: string;
    not_found: string;
};

export const switchRoutes: Routes = {
    root: '/',
    newtask: '/new',
    not_found: '/*'
};