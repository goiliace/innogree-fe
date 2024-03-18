const BenefitSection = () => {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-3 gap-2">
                {
                    Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className="p-4 bg-white bg-sky-50">
                            <h2 className="text-xl font-semibold">Benefit {index + 1}</h2>
                            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, odio nec eleifend ultrices, ex dui aliquet metus, nec aliquet elit nunc a libero.</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default BenefitSection;