import { CgFormatSlash } from "react-icons/cg";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const HomeMain = () => {
    return (
        <section className='bg-myColor-2 w-full'>
         <Breadcrumb className="p-3 font-bold">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
        </section>
    );
};

export default HomeMain;