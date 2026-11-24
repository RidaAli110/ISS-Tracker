export default function StatsBar() {
  return (
    <section
      aria-label='ISS statistics'
      className='mx-auto mt-4 min-[600px]:mt-8 w-full lg:w-5xl shadow-lg shadow-black/20'
    >
      <dl className='grid grid-cols-2 min-[600px]:grid-cols-4 place-items-center text-center p-2 min-[600px]:p-5 bg-(--bg-card) rounded-lg'>
        <div className='flex flex-col items-center gap-1 w-full py-2 border-r border-b border-(--border-color) min-[600px]:border-b-0'>
          <dt className='text-(--text-secondary) text-xs min-[600px]:text-sm'>
            Altitude
          </dt>
          <dd className='text-(--text-primary) text-base min-[600px]:text-xl font-semibold'>
            480 km
          </dd>
        </div>

        <div className='flex flex-col items-center gap-1 w-full py-2 border-b border-(--border-color) min-[600px]:border-b-0 min-[600px]:border-r min-[600px]:border-r-(--border-color)'>
          <dt className='text-(--text-secondary) text-xs min-[600px]:text-sm'>
            Velocity
          </dt>
          <dd className='text-(--text-primary) text-base min-[600px]:text-xl font-semibold'>
            27,600 km/h
          </dd>
        </div>

        <div className='flex flex-col items-center gap-1 w-full py-2 border-r border-(--border-color)'>
          <dt className='text-(--text-secondary) text-xs min-[600px]:text-sm'>
            Visibility
          </dt>
          <dd className='text-(--text-primary) text-base min-[600px]:text-xl font-semibold'>
            Daylight
          </dd>
        </div>

        <div className='flex flex-col items-center gap-1 w-full py-2'>
          <dt className='text-(--text-secondary) text-xs min-[600px]:text-sm'>
            Footprint
          </dt>
          <dd className='text-(--text-primary) text-base min-[600px]:text-xl font-semibold'>
            4,543 km
          </dd>
        </div>
      </dl>
    </section>
  );
}
