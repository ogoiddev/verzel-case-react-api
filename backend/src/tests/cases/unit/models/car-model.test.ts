import chai from 'chai';
import { Model } from 'mongoose';
import * as sinon from 'sinon';
import Car from '../../../../models/CarModel';
import { ICarDTOMock } from '../../../mocks/ICarDTOMock';
import { ICarMock } from '../../../mocks/ICarMock';
const { expect } = chai;

describe('Mongo model', () => {
  const carModel = new Car()

  after(()=>{
    sinon.restore();
  })


  it('Create function should be called with success return', async () => {
    sinon.stub(Model, 'create').resolves(ICarMock);
    const result = await carModel.create(ICarDTOMock)
    expect(result).to.be.deep.equal(ICarMock)

    sinon.restore();
  });

  it('Read function should be called with success return', async () => {
    sinon.stub(Model, 'find').resolves([]);
    const result = await carModel.read()
    expect(result).to.be.a('array')

    sinon.restore();
  });

  it('ReadOne function should be called with success return', async () => {
    sinon.stub(Model, 'findOne').resolves(ICarMock);
    const result = await carModel.readOne("carName")
    expect(result).to.be.deep.equal(ICarMock)

    sinon.restore();
  });

  it('Update function should be called with success return', async () => {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(ICarMock);
    const result = await carModel.update("632383aaea59c2b5dc96346b", ICarDTOMock)
    expect(result).to.be.deep.equal(ICarMock)

    sinon.restore();
  });

  it('Update function should be called with ERROR return', async () => {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(ICarMock);
    try {
      await carModel.update("2", ICarDTOMock)
    } catch(err: any) {
      expect(err.message).to.be.equal('InvalidMongoId')
    }
    
    sinon.restore();
  });

  it('Delete function should be called with success return', async () => {
    sinon.stub(Model, 'findByIdAndDelete').resolves(ICarMock);
    const result = await carModel.delete("632383aaea59c2b5dc96346b")
    expect(result).to.be.deep.equal(ICarMock)

    sinon.restore();
  });

});

