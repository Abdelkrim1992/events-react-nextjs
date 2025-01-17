import EventForm from "@/components/sections/EventForm";
import { auth } from "@clerk/nextjs/server";


const CreateEvent = () => {

  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  return (
    <>
      <section className="bg-center bg-primary-50 bg-dotted-pattern bg-cover py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left ">Create Event</h3>
      
      </section>

      <div className="wrapper py-5 md:py-10">
        <EventForm userId = {userId} type= "Create"/>
      </div>
    </>
  )
}

export default CreateEvent;
