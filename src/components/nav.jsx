import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    // BreadcrumbSeparator,
  } from '@chakra-ui/react'; 


const Nav = () => {
    return (
        <Breadcrumb>
            <BreadcrumbItem>
                <BreadcrumbLink href='#'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='#'>Docs</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>Breadcrumb</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    );
}

export default Nav;
